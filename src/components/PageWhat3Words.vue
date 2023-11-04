<template>
  <div class="what3words">
    <h2 class="page-title">What3Words</h2>

    <form action="" method="get">
      <What3wordsAutosuggest api_key="PFDAXZ2J">
        <input type="text">
      </What3wordsAutosuggest>
    </form>
  </div>
</template>

<script lang="ts">
import what3words, {
  ApiVersion,
  Transport,
  What3wordsService,
  axiosTransport,
} from '@what3words/api';

const apiKey = 'PFDAXZ2J';
const config: {
  host: string;
  apiVersion: ApiVersion;
} = {
  host: 'https://api.what3words.com',
  apiVersion: ApiVersion.Version3,
};
const transport: Transport = axiosTransport();
const w3wService: What3wordsService = what3words(apiKey, config, { transport });


what3words.api.convertTo3waGeoJson({ lat: 51.508344, lng: -0.12549900 }, 'en')
  .then(function (response) {
    console.log('[convertTo3wa]', response)
  })

// what3words.api.autosuggest('fun.with.code', { clipToCountry: ['FR', 'DE'] })
//   .then(function (response) {
//     console.log('[autosuggest]', response)
//   });

export default {
  name: 'Autosuggest',
  components: {
    // What3wordsAutosuggest
  },
  props: {
    callback: String,
    api_key: String,
    headers: String,
    base_url: String,
    name: String,
    initial_value: String,
    variant: String,
    typeahead_delay: Number,
    invalid_address_error_message: String,
    language: String,
    n_focus_results: Number,
    clip_to_country: String,
    clip_to_bounding_box: String,
    clip_to_circle: String,
    clip_to_polygon: String,
    return_coordinates: Boolean,
    value_changed: Function,
    value_valid: Function,
    value_invalid: Function,
    selected_suggestion: Function,
    suggestions_changed: Function,
    coordinates_changed: Function,
    __hover: Function,
    __focus: Function,
    __blur: Function,
    __error: Function
  }
}
</script>

<style lang="scss" scoped>

</style>
