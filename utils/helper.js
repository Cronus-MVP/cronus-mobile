export const formatAddressString = (string) => {
    const formated_string = string
      .split('span')
      .join('')
      .split('< class=')
      .join('')
      .split('</>')
      .join('')
      .split('>')
  
    const dict = {}
  
    formated_string.forEach((item, i) => {
      if (item.includes('street-address')){
        dict['streetAdress'] = formated_string[i+1].split(',')[0]
      }
      if (item.includes('locality')){
        dict['locality'] = formated_string[i+1].split(',')[0]
      }
      if (item.includes('region')){
        if(formated_string[i+1].includes(',')){
          dict['region'] = formated_string[i+1].split(',')[0]
        } else{
          dict['region'] = formated_string[i+1].split(' ')[0]
        }
      }
      if (item.includes('postal-code')){
        dict['postalCode'] = formated_string[i+1].split(',')[0].split('-')[0]
      }
      if (item.includes('country-name')){
        dict['countryName'] = formated_string[i+1].split(',')[0]
      }
    })
    return dict
  }