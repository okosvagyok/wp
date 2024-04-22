function getData(url){
    return new Promise((resolve, reject) =>{
        xhRequest(resolve, reject, url)
    });
};

function postData(url, data){
    return new Promise((resolve, reject) =>{
        postRequest(resolve, reject, url, data)
    });
};
const xhRequest=(resolve, reject, url)=>{
    const xhr = new XMLHttpRequest();
    xhr.open('Get', url);
    xhr.onreadystatechange = () =>{
        if (xhr.readyState===4){
            if (xhr.status = 200){
                resolve(JSON.parse(xhr.responseText));
            }
            else{
                let errorData;
                try{
                    errorData = JSON.parse(xhr.responseText);
                }catch(e){
                    errorData = {
                        status: xhr.status
                    }
                }
                reject(errorData)
            }
        }
    }
};

const postData = (resolve, reject, url, data) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          let errorData;
          try {
            errorData = JSON.parse(xhr.responseText);
          } catch (e) {
            errorData = {
              status: xhr.status
            };
          }
          reject(errorData);
        }
      }
    };
    xhr.send(JSON.stringify(data));
  };

export{getData};
export{postData};