<template>
  <div>
    <page-header :title="title"></page-header>

    <section class="section">
      <div class="tile is-ancestor centered">
        <div class="tile is-6 is-parent">
          <div class="tile is-child box">

            <article v-if="formError" class="message is-danger">
              <div class="message-header">
                <p>Form Error</p>
                <button v-on:click="formError = false" class="delete" aria-label="delete"></button>
              </div>
              <div class="message-body">
                Please fill in your Name, Email & Message. These are mandatory fields on the form.
              </div>
            </article>

            <div v-if="showForm">
              <div v-for="formContent in formContents"
                :key="formContent"
                class="field">
                <label class="label">{{ formContent }}</label>
                <div class="control">
                  <input class="input" type="text" v-model="userInput[formContent]" :placeholder="'Enter your ' + formContent + '...'">
                </div>
              </div>

              <div class="field">
                <label class="label">Message</label>
                <div class="control">
                  <textarea class="textarea" v-model="userInput.Message" type="text" rows=10 placeholder="Enter your Message ..."></textarea>
                </div>
              </div>

              <div class="field is-grouped">
                <div class="control">
                  <button v-on:click="sumbitPost" class="button is-dark">Submit</button>
                </div>
                <div class="control">
                  <button v-on:click="clearPost" class="button is-dark">Clear</button>
                </div>
              </div>
            </div>

            <div class="submission-message" v-if="!showForm">
              <span class="icon is-small submission-message-content">
                <font-awesome-icon icon="thumbs-up" />
              </span>

              <h1 class="has-text-centered submission-message-content">
                Thanks for your message, we will get back to you as soon as possible.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import PageHeader from '../components/PageHeader'
import { contactPage } from '../../static/contact.js'

export default {
  name: 'contact',
  components: {
    'page-header': PageHeader
  },
  data () {
    return contactPage
  },
  methods: {
    clearPost: function () {
      this.userInput = this.orgUserInput
    },
    sumbitPost: function () {
      if (this.userInput.Message === '' || this.userInput.Name === '' || this.userInput.Email === '') {
        this.formError = true
      } else {
        this.formError = false

        let formContent = {
          name: this.userInput.Name,
          email: this.userInput.Email,
          phone: this.userInput['Phone Number'],
          title: this.userInput.Subject,
          body: this.userInput.Message
        }

        this.$http.post(
          'http://getsimpleform.com/messages/ajax?form_api_token=c8a65e5d24b6775a02ec99a7ff69c474',
          JSON.stringify(formContent)
        ).then(function (data) {
          this.showForm = false
          this.clearPost()
        })
      }
    }
  }
}
</script>

<style scoped>
.centered {
  flex-direction: column;
  align-items: center;
}

.submission-message {
  display:flex;
  flex-direction: row;
  background-color: white;
}

.submission-message-content {
  align-self: center;
}
</style>
