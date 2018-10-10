import App from './client/app'
import compression from 'compression'
import * as express from 'express'
import { h } from 'preact'
import { readFileSync } from 'fs'
import { render } from 'preact-render-to-string'

const app: express.Application = express.default()
const htmlTemplate: string = readFileSync(`${__dirname}/client/index.html`).toString()
const port: number = Number.parseInt(process.env.PORT) || 3000

app.use(compression())
app.use('/public', express.static(`${__dirname}/client`))
app.get('/', (request, reply) => {
  reply
    .type('text/html; charset=utf-8')
    .send(htmlTemplate
      .replace(
        '<div id="root"></div>',
        `<div id="root">${render(<App />)}</div>`
      )
    )
})

app.listen(port, () => {
  console.info(`App running on port http://localhost:${port}`)
})

