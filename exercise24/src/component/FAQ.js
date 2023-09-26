import React from 'react'

export default function FAQ() {
  return (
    <div class="container">
      <h1 class="display-3">FAQ</h1>
      <div class="accordion" id="FAQ">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <p class="text-primary">01. I don't remember my password</p>
        </button>
        </h2>
      <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#FAQ">
      <div class="accordion-body ">
        If you don't remember your password. You can click at the "I forget my password" button at the login modal. We will require you to provide your email and you a reset password link that you can reset your password.
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <p class="text-primary">02. How can I create account at your site?</p>
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#FAQ
    ">
        <div class="accordion-body">
          ijeu dkjfeuv djdif hejnv pei a udn uvnbq dsudn fuekfn eij juenj ivzij jisfjk sj efjie fiejkl jcxk jelksmfe.
        </div>
      </div>
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseTwo">
            <p class="text-primary">03. What are your delivery hours?</p>
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#FAQ
      ">
          <div class="accordion-body">
            If you don't remember your password. You can click at the "I forget my password" button at the login modal. We will require you to provide your email and you a reset password link that you can reset your password.
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <p class="text-primary">04. How much time it takes to deliver the order?</p>
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#FAQ
        ">
            <div class="accordion-body">
              If you don't remember your password. You can click at the "I forget my password" button at the login modal. We will require you to provide your email and you a reset password link that you can reset your password.
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                <p class="text-primary">05. How do I know status of my order?</p>
              </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#FAQ
          ">
              <div class="accordion-body">
                If you don't remember your password. You can click at the "I forget my password" button at the login modal. We will require you to provide your email and you a reset password link that you can reset your password.
              </div>
              </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}
