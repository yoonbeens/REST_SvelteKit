<h1>Sveltekit Form Control</h1>
<form action="?/form1" method="post">
    <div class="mb-3">
        <label for="inputId" class="form-label">Id</label>
        <input type="text" class="form-control" id="inputId" name="formId" style="width:50%"aria-describedby="emailHelp">
      </div>
    <div class="mb-3">
      <label for="inputEmail" class="form-label">Email</label>
      <input type="text" class="form-control" id="inputEmail" name="formEmail" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="inputName" class="form-label">Name</label>
      <input type="text" class="form-control" id="inputName" name="formName">
    </div>
    <input type="submit">

  </form>


  <br />

  <form action="?/form2" method="post">
    <div class="mb-3">
      <label for="inputAge" class="form-label">Age</label>
      <input type="text" class="form-control" id="inputAge" name="formAge">
    </div>
    <input type="submit">

  </form>