









//sending text with info from quickbase
  // const reqUrl = `https://api.quickbase.com/v1/records/query`;
  // const headers = {
  //   'QB-Realm-Hostname': `${hostName}`,
  //   'User-Agent': 'Joe',
  //   'Authorization': `QB-USER-TOKEN ${token}`,
  //   'Content-Type': 'application/json'
  //   };
  // const body = {
  //   'from': `${projectTableId}`,
  //   'select': [
  //     20, 21, 22, 27, 30, 45, 80, 113, 120, 129, 131, 
  //     132, 140, 149, 157, 159, 161
  //   ],
  //   'where': '',
  //   'sortBy': false,
  //   'groupBy': [
  //     {
  //       'fieldId': 20,
  //       'grouping': 'ASC'
  //     },
  //   ],
  //   'options': {
  //     'skip': 0,
  //     'top': 0,
  //     'compareWithAppLocalTime': false
  //   },
  // };
  // axios({
  //   method: 'POST',
  //   url: reqUrl,
  //   headers,
  //   data: body
  // })
  //   .then(({ data }) => {
  //     let message = '';
  //     for (let i = 0; i < data.data.length; i += 1) {
  //       if (data.data[i][20].value === '4862') {
  //         message = (`Hello, ${data.data[0][113].value}, you should report for 
  //         the ${data.data[0][132].value} project on ${data.data[0][30].value}.`)
  //       }
  //     }
  //     // .then((data) => {
  //       client.messages
  //       .create({
  //         body: message,
  //         from: `${sourceNumber}`,
  //         to: `${destinationNumber}`
  //       })
  //     })
  //   // })
  //   .catch((err) => console.log(err));