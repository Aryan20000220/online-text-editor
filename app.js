
 $('.left').on('click',function(){
    
    document.getElementById('editor').style.textAlign = 'left '
 }) 

 $('.center').on('click',function(){
    document.getElementById('editor').style.textAlign = 'center '
 }) 

$('.right').on('click',function(){
   document.getElementById('editor').style.textAlign = 'right '   
 }) 

$('.justify').on('click', function() {
   document.getElementById('editor').style.textAlign = 'justify '
 })


 document.querySelectorAll ('#editor').forEach(function (element) {
    element.addEventListener('input', function() {
        currentStep++
        if (currentStep < contentHistory.length){
            contentHistory = contentHistory.slice(0, currentStep)
        }

        contentHistory.push(document.getElementById('editor').innerHTML)
    })
 })
