import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'
import fs from 'fs'
import path from 'path'

const ffmpeg = new FFmpeg()

const publicDir = './public'

async function convertMovToMp4() {
  console.log('Loading FFmpeg...')
  
  const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd'
  await ffmpeg.load({
    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
  })

  const files = fs.readdirSync(publicDir)
  const movFiles = files.filter(f => f.toLowerCase().endsWith('.mov'))
  
  console.log(`Found ${movFiles.length} .MOV files to convert`)

  for (const file of movFiles) {
    const inputPath = path.join(publicDir, file)
    const outputPath = path.join(publicDir, file.replace('.mov', '.mp4').replace('.MOV', '.mp4'))
    
    console.log(`Converting ${file} to MP4...`)
    
    await ffmpeg.writeFile('input.mov', await fetchFile(inputPath))
    
    await ffmpeg.exec(['-i', 'input.mov', '-vcodec', 'libx264', '-acodec', 'aac', '-movflags', '+faststart', 'output.mp4'])
    
    const data = await ffmpeg.readFile('output.mp4')
    fs.writeFileSync(outputPath, data)
    
    console.log(`Created ${outputPath}`)
  }
  
  console.log('Conversion complete!')
}

convertMovToMp4().catch(console.error)
