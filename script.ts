// 读取 jsonl 文件
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const data = readFileSync(
  resolve(__dirname, '../../../summary.jsonl'),
  'utf-8'
)
const lines = data.split('\n').filter(Boolean)
const newlines = lines.map((line) => {
  return JSON.parse(line)['组件简介及相关操作']
}).join('\n')

writeFileSync(resolve(__dirname, '../../../summary.txt'), newlines)
