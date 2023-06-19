import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skJzqez3tthJNcfzV28hed8AcCpejU9V9e6u40ZMhxvzjSO22h30D2vZMfFReAQHIh6D0YcapLRDPIfA0okkoB4oV4iK56A2Baaax05AglGqhxUj6A5DGBMcsUyk8uKJbDeOKKiMCt0Q3AJ8OoulfoCjUzTujdfTQSUJinFXv1UYGzNwusQh",
  })
