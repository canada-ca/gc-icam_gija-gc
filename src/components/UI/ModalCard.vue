<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Levels of Assurance
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>
            There are four Levels of Assurance (LoAs) ranging from LoA 1 (the
            lowest level) to LoA 4 (the highest level) associated with identity,
            credentials and authentication as defined in the following GC policy
            instruments and guidance documents:
          </p>
          <ul>
            <li>
              <a href="">
                Directive on Identity Management - Appendix A: Standard on
                Identity and Credential Assurance
              </a>
              which defines the four assurance levels associated with identity
              assurance and credential assurance
            </li>
            <li>
              <a href="">Guideline on Defining Authentication Requirements</a>,
              which describes a methodology for determining the minimum
              assurance level needed for user authentication in a given context
            </li>
            <li>
              <a href="">Guideline on Identity Assurance</a>, which specifies
              the minimum requirements to establish the identity of an
              individual for a given level of assurance
            </li>
            <li>
              <a href=""
                >User Authentication Guidance for Information Technology
                Systems</a
              >, which provides technical guidance on user authentication
              requirements at each level of assurance.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h5 {
  color: black;
}
p,
li {
  text-align: left;
}
</style>
