function bold()   {
    document.execCommand('bold', true , null) 
 }
 
 $('.font-color').on('click', function() {
    var selection = window.getSelection()
    var highlightedText = selection.toString()
    var span = "<span style='color: red'>" + highlightedText + "</span>"
    var text = document.getElementById('editor').innerHTML
    document.getElementById('editor').innerHTML = text.replace(highlightedText, span)
})

 var contentHistory = []
 var currentStep = 0

 function undo() {
    if (currentStep > 0) {
        currentStep--
        if (contentHistory[currentStep] != undefined) {
            document.getElementById('editor').innerHTML = contentHistory[currentStep]
        }
    }
 }

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