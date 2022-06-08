

$(document).ready(function () {
  $.fn.myFunction = function () {
  

    $.getJSON('data.json', function (name) {
      $('#gallery-window').empty()
      var arr = [];
      while (arr.length < 5) {
        var r = Math.floor(Math.random() * 40) + 7;
        if (arr.indexOf(r) === -1) arr.push(r);

      }
      console.log(arr)
      let newData = [];
      name.map((item) => {
        let temp = arr.includes(item.id)
        temp && newData.push(item);
      })
      newData.map((data) => {
        $('#gallery-window').append(`<div class="gallery-card">\
                              <img src=${data.img} alt="01" width="600" height="400" />\
                              <div class="desc">${data.name}</div>\
                              <a href=${data.url}>Click here to visit</a>\
                          </div>`);
      })


    })


  }
});