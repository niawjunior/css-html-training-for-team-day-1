document.getElementById('cat1').addEventListener('click', function(event){
  document.getElementById('cat-popup1').style.display = 'block';
  document.getElementById('cat-popup2').style.display = 'none';
  document.getElementById('cat-popup3').style.display = 'none';
})

document.getElementById('cat1').addEventListener('mouseleave', function(){
  setTimeout(() => {
    document.getElementById('cat-popup1').style.display = 'none';
  }, 900)
})


document.getElementById('cat2').addEventListener('click', function(event){
  document.getElementById('cat-popup2').style.display = 'block';
  document.getElementById('cat-popup1').style.display = 'none';
  document.getElementById('cat-popup3').style.display = 'none';
})


document.getElementById('cat2').addEventListener('mouseleave', function(){
  setTimeout(() => {
    document.getElementById('cat-popup2').style.display = 'none';
  }, 900)
})

document.getElementById('cat3').addEventListener('click', function(event){
  document.getElementById('cat-popup3').style.display = 'block';
  document.getElementById('cat-popup1').style.display = 'none';
  document.getElementById('cat-popup2').style.display = 'none';
})

document.getElementById('cat3').addEventListener('mouseleave', function(){
  setTimeout(() => {
    document.getElementById('cat-popup3').style.display = 'none';
  }, 900)
})