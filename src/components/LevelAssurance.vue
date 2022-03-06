<template>
  <fa icon="up-long"></fa>
  <div class="row align-middle">
    <div class="col-1 gx-0 gy-4">
      <fa icon="left-long"></fa>
    </div>
    <div class="col-10">
      <popover-button
        id="levels"
        :description="levelOfAssurance.description"
        :title="levelOfAssurance.title"
        ><a
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          @click="showDetail"
          >Levels of Assurance</a
        ></popover-button
      >
    </div>
    <div class="col-1 gx-0 gy-4 text-end">
      <fa icon="right-long"></fa>
    </div>
  </div>
  <fa icon="down-long"></fa>
</template>

<script>
import PopoverButton from "./UI/PopoverButton.vue";
export default {
  emits: ["detail"],
  components: {
    PopoverButton
  },
  data() {
    return {
      levelOfAssurance: {
        title: "Levels of Assurance",
        description:
          "There are four Levels of Assurance (LoAs) ranging from LoA 1 (the lowest level) to LoA 4 (the highest level) associated with identity, credentials and authentication as defined in the applicable GC policy instruments and guidance documents",
        detail: `<p>
            There are four Levels of Assurance (LoAs) ranging from LoA 1 (the
            lowest level) to LoA 4 (the highest level) associated with identity,
            credentials and authentication as defined in the following GC policy
            instruments and guidance documents:
          </p>
          <ul>
            <li>
              <a
                href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32612&section=html"
                target="_blank"
              >
                Directive on Identity Management - Appendix A: Standard on
                Identity and Credential Assurance
              </a>
              which defines the four assurance levels associated with identity
              assurance and credential assurance
            </li>
            <li>
              <a
                href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=26262&section=html"
                target="_blank"
                >Guideline on Defining Authentication Requirements</a
              >, which describes a methodology for determining the minimum
              assurance level needed for user authentication in a given context
            </li>
            <li>
              <a
                href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=30678&section=html"
                target="_blank"
                >Guideline on Identity Assurance</a
              >, which specifies the minimum requirements to establish the
              identity of an individual for a given level of assurance
            </li>
            <li>
              <a
                href="https://www.cyber.gc.ca/en/guidance/user-authentication-guidance-information-technology-systems-itsp30031-v3"
                target="_blank"
                >User Authentication Guidance for Information Technology
                Systems</a
              >, which provides technical guidance on user authentication
              requirements at each level of assurance.
            </li>
          </ul>`
      }
    };
  },
  methods: {
    showDetail() {
      this.$emit(
        "detail",
        this.levelOfAssurance.title,
        this.levelOfAssurance.detail
      );
    }
  }
};
</script>

<style scoped>
button {
  border-radius: 50%;
  background-color: #00b0f0;
  color: black;
  padding: 1rem;
  margin: 0;
  width: 100%;
}
button:hover,
button:active {
  background-color: yellow;
  border-color: #270041;
}
</style>
