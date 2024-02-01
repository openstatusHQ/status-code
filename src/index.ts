import { Hono } from 'hono'
import { poweredBy } from 'hono/powered-by'
import { logger } from 'hono/logger'


const app = new Hono()
app.use('*', logger())

app.use('*', poweredBy())

app.get('/', (c) => {
  return c.text('Just return the desired http status code, e.g. /404 🤯 \nhttps://www.openstatus.dev')
})
//  Informational responses (100–199)
app.get('/100', (c) => {
  return c.text("100 - Continue - This interim response indicates that the client should continue the request or ignore the response if the request is already finished. ",100)
})
app.get('/101', (c) => {
  return c.text("101 Switching Protocols - This code is sent in response to an Upgrade request header from the client and indicates the protocol the server is switching to.",101)
})
app.get('/102', (c) => {
  return c.text("102 - Processing - This code indicates that the server has received and is processing the request, but no response is available yet.",102)
})
app.get('/103', (c) => {
  return c.text("103 - Early Hints - This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response.",103)
})
//  Successful responses (200–299)
app.get('/200', (c) => {
  return c.text("200",200)
})
app.get('/201', (c) => {
  return c.text("201",201)
})
app.get('/202', (c) => {
  return c.text("202",202)
})
app.get('/203', (c) => {
  return c.text("203",203)
})
app.get('/204', (c) => {
  return c.text("204",204)
})
app.get('/205', (c) => {
  return c.text("205",205)
})
app.get('/206', (c) => {
  return c.text("206",206)
})
app.get('/207', (c) => {
  return c.text("207",207)
})
app.get('/208', (c) => {
  return c.text("208",208)
})
app.get('/226', (c) => {
  return c.text("226",226)
})
app.get('/300', (c) => {
  return c.text("300",300)
})
app.get('/301', (c) => {
  return c.text("301",301)
})
app.get('/302', (c) => {
  return c.text("302",302)
})
app.get('/303', (c) => {
  return c.text("303",303)
})
app.get('/304', (c) => {
  return c.text("304",304)
})
app.get('/305', (c) => {
  return c.text("305",305)
})
app.get('/306', (c) => {
  return c.text("306",306)
})
app.get('/307', (c) => {
  return c.text("307",307)
})
app.get('/308', (c) => {
  return c.text("308",308)
})
app.get('/400', (c) => {
  return c.text("400",400)
})
app.get('/401', (c) => {
  return c.text("401",401)
})
app.get('/402', (c) => {
  return c.text("402",402)
})
app.get('/403', (c) => {
  return c.text("403",403)
})
app.get('/404', (c) => {
  return c.text("404",404)
})
app.get('/405', (c) => {
  return c.text("405",405)
})
app.get('/406', (c) => {
  return c.text("406",406)
})
app.get('/407', (c) => {
  return c.text("407",407)
})
app.get('/408', (c) => {
  return c.text("408",408)
})
app.get('/409', (c) => {
  return c.text("409",409)
})
app.get('/410', (c) => {
  return c.text("410",410)
})
app.get('/411', (c) => {
  return c.text("411",411)
})
app.get('/412', (c) => {
  return c.text("412",412)
})
app.get('/413', (c) => {
  return c.text("413",413)
})
app.get('/414', (c) => {
  return c.text("414",414)
})
app.get('/415', (c) => {
  return c.text("415",415)
})
app.get('/416', (c) => {
  return c.text("416",416)
})
app.get('/417', (c) => {
  return c.text("417",417)
})
app.get('/418', (c) => {
  return c.text("418",418)
})
app.get('/420', (c) => {
  return c.text("420",420)
})
app.get('/421', (c) => {
  return c.text("421",421)
})
app.get('/422', (c) => {
  return c.text("422",422)
})
app.get('/423', (c) => {
  return c.text("423",423)
})
app.get('/424', (c) => {
  return c.text("424",424)
})
app.get('/425', (c) => {
  return c.text("425",425)
})
app.get('/426', (c) => {
  return c.text("426",426)
})
app.get('/428', (c) => {
  return c.text("428",428)
})
app.get('/429', (c) => {
  return c.text("429",429)
})
app.get('/431', (c) => {
  return c.text("431",431)
})
app.get('/444', (c) => {
  return c.text("444",444)
})
app.get('/449', (c) => {
  return c.text("449",449)
})
app.get('/450', (c) => {
  return c.text("450",450)
})
app.get('/451', (c) => {
  return c.text("451",451)
})
app.get('/499', (c) => {
  return c.text("499",499)
})
app.get('/500', (c) => {
  return c.text("500",500)
})
app.get('/501', (c) => {
  return c.text("501",501)
})
app.get('/502', (c) => {
  return c.text("502",502)
})
app.get('/503', (c) => {
  return c.text("503",503)
})
app.get('/504', (c) => {
  return c.text("504",504)
})
app.get('/505', (c) => {
  return c.text("505",505)
})
app.get('/506', (c) => {
  return c.text("506",506)
})
app.get('/507', (c) => {
  return c.text("507",507)
})
app.get('/508', (c) => {
  return c.text("508",508)
})
app.get('/509', (c) => {
  return c.text("509",509)
})
app.get('/510', (c) => {
  return c.text("510",510)
})
app.get('/511', (c) => {
  return c.text("511",511)
})
app.get('/598', (c) => {
  return c.text("598",598)
})
app.get('/599', (c) => {
  return c.text("599",599)
})

export default app
