function actualizacion(id) {
  var html = "<p>Hola este es un parrafo de prueba "  
  switch (id) {
    case 'Quitu':
      html += 'Quitu</p>'      
      break
    case 'Cotopaxi':
      html += 'Cotopaxi</p>'
      break
    case 'Santo Domingo':
      html += 'Santo Domingo</p>'
      break
    case 'Guayaquil':
      html += 'Guayaquil</p>'
      break
  }
  $('#description').html(html)
}