    // Automatically set the current date in the "Date of Submission" field
    document.getElementById('date').value = new Date().toISOString().split('T')[0];

    // Function to add another author input dynamically with remove button
    document.getElementById('addAuthor').addEventListener('click', function () {
      const authorList = document.getElementById('authorList');
      
      // Create a new input group for author and remove button
      const newAuthorGroup = document.createElement('div');
      newAuthorGroup.className = 'input-group mb-2';

      const newAuthorInput = document.createElement('input');
      newAuthorInput.type = 'text';
      newAuthorInput.name = 'author[]';
      newAuthorInput.className = 'form-control';
      newAuthorInput.placeholder = 'Enter author name';
      newAuthorInput.required = true;

      const removeButton = document.createElement('button');
      removeButton.className = 'btn btn-outline-danger';
      removeButton.type = 'button';
      removeButton.innerHTML = '<i class="fas fa-times"></i>';

      // Remove the author input when clicking the remove button
      removeButton.addEventListener('click', function () {
        authorList.removeChild(newAuthorGroup);
      });

      // Append input and remove button to the new group
      newAuthorGroup.appendChild(newAuthorInput);
      newAuthorGroup.appendChild(removeButton);

      // Append the new group to the author list
      authorList.appendChild(newAuthorGroup);
    });


