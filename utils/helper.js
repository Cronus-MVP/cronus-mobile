export const formatAddressString = (string) => {
  console.log("Initial String", string)
    const formated_string = string
      .split('span')
      .join('')
      .split('< class=')
      .join('')
      .split('</>')
      .join('')
      .split('>')
  
    const dict = {}
    console.log("Formatted string: ", formated_string)
  
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
      if (item.includes('lat')){
        dict['lat'] = formated_string[i+1].split(',')[0]
      }
      if (item.includes('lng')){
        dict['lng'] = formated_string[i+1].split(',')[0]
      }
    })
    return dict
  }

export function getRegionForCoordinates(point) {
    // points should be an array of { latitude: X, longitude: Y }
    let minX, maxX, minY, maxY;
  
    // init first point
    ((point) => {
      minX = point.latitude;
      maxX = point.latitude;
      minY = point.longitude;
      maxY = point.longitude;
    })(points[0]);
  
    // calculate rect
    points.map((point) => {
      minX = Math.min(minX, point.latitude);
      maxX = Math.max(maxX, point.latitude);
      minY = Math.min(minY, point.longitude);
      maxY = Math.max(maxY, point.longitude);
    });
  
    const midX = (minX + maxX) / 2;
    const midY = (minY + maxY) / 2;
    const deltaX = (maxX - minX);
    const deltaY = (maxY - minY);
  
    return {
      latitude: midX,
      longitude: midY,
      latitudeDelta: deltaX,
      longitudeDelta: deltaY
    };
  }