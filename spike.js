(function(){
  var data = {
    quantity: 50,
    price: '12€',
    name: 'metal'
  };

  var template = $('#renderable');

  var doc = new jsPDF()
  doc.fromHTML(template.get(0), 15, 15, {
  	'width': 700
  }, displayPdf);

  function displayPdf() {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('style','position:absolute;right:0; top:0; bottom:0; height:100%; width:500px');
    document.body.appendChild(iframe);
    iframe.src = doc.output('datauristring');
  }
})();
