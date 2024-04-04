async function basicdetaildata() {
  var baseUrl = (window.location).href;
  var Id = baseUrl.substring(baseUrl.lastIndexOf('/') + 1);
  let fetchdata = await fetch(`http://localhost:8000/fbasicdetail/${Id}`)
  let data = await fetchdata.json()

  let key = Object.keys(data[0])
  key.forEach(item => {

      if (item == 'gender') {
          let radio = document.getElementsByName('radio')
          radio.forEach(ele => {
              if (ele.value == data[0][item]) {
                  ele.checked = true
              }
          });
      }
      else {
          document.getElementsByName(item)[0].value = data[0][item]
      }
  });
}

const edudetailFun = async () => {
  var baseUrl = (window.location).href;
  var Id = baseUrl.substring(baseUrl.lastIndexOf('/') + 1);
  let fetchdata = await fetch(`http://localhost:8000/fedudetail/${Id}`)
  let data = await fetchdata.json()

  let key = Object.keys(data)
  key.forEach(item => {

      let dtkey = Object.keys(data[item])
      dtkey.forEach(element => {
          document.getElementsByName(element)[item].value = data[item][element]
      });
  });

}

const workFun = async () => {
  var baseUrl = (window.location).href;
  var Id = baseUrl.substring(baseUrl.lastIndexOf('/') + 1);
  let fetchdata = await fetch(`http://localhost:8000/fworkexp/${Id}`)
  let data = await fetchdata.json()
  let key = Object.keys(data)

  key.forEach(item => {
  
      let dtkey = Object.keys(data[item])
    
      dtkey.forEach(element => {
          document.getElementsByName(element)[item].value = data[item][element]
      });

  });
}

const refDetail = async () => {
  var baseUrl = (window.location).href;
  var Id = baseUrl.substring(baseUrl.lastIndexOf('/') + 1);
  let fetchdata = await fetch(`http://localhost:8000/frefdetail/${Id}`)
  let data = await fetchdata.json()
  let key = Object.keys(data)

  key.forEach(item => {
 
      let dtkey = Object.keys(data[item])

      dtkey.forEach(element => {
          document.getElementsByName(element)[item].value = data[item][element]
      });
  });
}

const prefDetail = async () => {
  var baseUrl = (window.location).href;
  var Id = baseUrl.substring(baseUrl.lastIndexOf('/') + 1);
  let fetchdata = await fetch(`http://localhost:8000/fprefdetail/${Id}`)
  let data = await fetchdata.json()
  let key = Object.keys(data)

  key.forEach(item => {

      let dtkey = Object.keys(data[item])

      dtkey.forEach(element => {
          document.getElementsByName(element)[item].value = data[item][element]
      });
  });
}

const techDetail = async () => {
  var baseUrl = (window.location).href;
  var Id = baseUrl.substring(baseUrl.lastIndexOf('/') + 1);
  let fetchdata = await fetch(`http://localhost:8000/ftechdetail/${Id}`)
  let data = await fetchdata.json()

  let techid = document.getElementsByName('tech_id')

  let tech = document.getElementsByName('techlang')



  tech.forEach(item => {
 
      let key = Object.keys(data)
      key.forEach(element => {
      
          techid[element].value = data[element].tech_id
          if (item.value == data[element].techlang) {
              item.checked = true;

              if (data[element].tech_level == 'Beginer') {
                  document.getElementsByName(item.value)[0].checked = true;
              }
              if (data[element].tech_level == 'Mideator') {
                  document.getElementsByName(item.value)[1].checked = true;
              }
              if (data[element].tech_level == 'Expert') {
                  document.getElementsByName(item.value)[2].checked = true;
              }

          }
      });

  });
}

const langDetail = async () => {
  var baseUrl = (window.location).href;
  var Id = baseUrl.substring(baseUrl.lastIndexOf('/') + 1);
  let fetchdata = await fetch(`http://localhost:8000/flangdetail/${Id}`)
  let data = await fetchdata.json()
  let langid = document.getElementsByName('lang_id')
  let lang = document.getElementsByName('language')

  lang.forEach(item => {
      let key = Object.keys(data)
      key.forEach(element => {
          langid[element].value = data[element].lang_id
          if (item.value == data[element].lang) {
              item.checked = true;

              if (data[element].read_lang == 1) {
                  document.getElementsByName("read_" + item.value)[0].checked = true
              }
              if (data[element].write_lang == 1) {
                  document.getElementsByName("write_" + item.value)[0].checked = true
              }
              if (data[element].speak_lang == 1) {
                  document.getElementsByName("speak_" + item.value)[0].checked = true
              }
          }
      });

  });
}


langDetail()
techDetail()
refDetail()
prefDetail()
edudetailFun()
basicdetaildata()
workFun()


