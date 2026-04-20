const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
const toastTrigger2 = document.getElementById('liveToastBtn2')
const toastLiveExample2 = document.getElementById('liveToast2')
const toastTrigger3 = document.getElementById('liveToastBtn3')
const toastLiveExample3 = document.getElementById('liveToast3')
const toastTrigger4 = document.getElementById('liveToastBtn4')
const toastLiveExample4 = document.getElementById('liveToast4')
const toastTrigger5 = document.getElementById('liveToastBtn5')
const toastLiveExample5 = document.getElementById('liveToast5')
const toastTrigger6 = document.getElementById('liveToastBtn6')
const toastLiveExample6 = document.getElementById('liveToast6')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

if (toastTrigger2) {
  const toastBootstrap2 = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)
  toastTrigger2.addEventListener('click', () => {
    toastBootstrap2.show()
  })
}

if (toastTrigger3) {
  const toastBootstrap3 = bootstrap.Toast.getOrCreateInstance(toastLiveExample3)
  toastTrigger3.addEventListener('click', () => {
    toastBootstrap3.show()
  })
}

if (toastTrigger4) {
  const toastBootstrap4 = bootstrap.Toast.getOrCreateInstance(toastLiveExample4)
  toastTrigger4.addEventListener('click', () => {
    toastBootstrap4.show()
  })
}

if (toastTrigger5) {
  const toastBootstrap5 = bootstrap.Toast.getOrCreateInstance(toastLiveExample5)
  toastTrigger5.addEventListener('click', () => {
    toastBootstrap5.show()
  })
}

if (toastTrigger6) {
  const toastBootstrap6 = bootstrap.Toast.getOrCreateInstance(toastLiveExample6)
  toastTrigger6.addEventListener('click', () => {
    toastBootstrap6.show()
  })
}