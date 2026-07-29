import {defineLive} from 'next-sanity/live'
import {client} from './client'
import {token} from '../env'

export const {sanityFetch, SanityLive} = defineLive({
  client,
  // Required for showing draft content when the Sanity Presentation Tool is used, or to enable the Vercel Toolbar Edit Mode
  serverToken: token,
})