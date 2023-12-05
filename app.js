
 var contentHistory = []
 var currentStep = 0


 function redo() {
    if (currentStep > 0) {
        currentStep++
        if (contentHistory[currentStep] != undefined) {
            document.getElementById('editor').innerHTML = contentHistory[currentStep]
        }
    }
 }

 document.querySelectorAll ('#editor').forEach(function (element) {
    element.addEventListener('input', function() {
        currentStep++
        if (currentStep < contentHistory.length){
            contentHistory = contentHistory.slice(0, currentStep)
        }

        contentHistory.push(document.getElementById('editor').innerHTML)
    })
 })
