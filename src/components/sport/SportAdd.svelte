<script>
  let title = ''; 
  let unitType = 'kg';
</script>

<form>
  <div class="form-group row">
    <label for="inputSportTitle" class="col-sm-2 col-form-label">Sport Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputSportTitle" bind:value={title} />
    </div>
  </div>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="ckbox-unitType-kg"
            bind:group={unitType}
            value="kg"/>
          <label class="form-check-label" for="ckbox-unitType-kg">kg</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="ckbox-unitType-lbs"
            bind:group={unitType}
            value="lbs" />
          <label class="form-check-label" for="ckbox-unitType-lbs">lbs</label>
        </div>
      </div>
    </div>
  </fieldset>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary" on:click>add sport</button>
    </div>
  </div>
</form>
