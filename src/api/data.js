import $axios from './index'

export function getOrgData(data) {
  const url ='get_org_data'
  return $axios.get(url, data)
}

export function saveErrorLogger(data) {
  const url ='save_error_logger'
  return $axios.post(url, data)
}
