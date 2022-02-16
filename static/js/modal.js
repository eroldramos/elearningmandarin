function showDeleteModal(id, anyId){
    document.getElementById(id).style.display = "flex"
    document.getElementById('anyId').value = anyId
}

function closeDeleteModal(id){
    document.getElementById(id).style.display = "none"
}
