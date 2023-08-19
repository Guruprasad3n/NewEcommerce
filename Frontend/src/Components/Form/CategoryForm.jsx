function CategoryForm({handleSubmit, value, setValue}) {
    return (
      <>
        <form onSubmit={handleSubmit} >
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter New Category"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
         
        </form>
      </>
    );
  }
  export default CategoryForm;
  