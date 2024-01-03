import { Document, Packer, Paragraph, TextRun } from 'docx'
import { ClientDetails } from '../types/clientDetails'
import fs from 'fs'

export async function generateReports(clientDetails: ClientDetails) {
  const paragraphs = Object.entries(clientDetails).map(
    ([key, value]) =>
      new Paragraph({
        children: [
          new TextRun({
            text: `${key}: `,
            bold: true
          }),
          new TextRun(value || '')
        ]
      })
  )

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: paragraphs
      }
    ]
  })
  try {
    Packer.toBuffer(doc).then((buffer) => {
      fs.writeFileSync(`/home/mike/Documents/reports/${clientDetails.Client}.docx`, buffer)
    })
  } catch (error) {
    console.error('Unable to write to file system:', error)
  }
}
