let item_dollar = 0;
function inc() {
   item_dollar += 100;
   swal("Item is added successfully ");
}
function dec() {

   if (item_dollar >= 100)
   {
      item_dollar -= 100;
      swal("Item is removed successfully ");
   } 
   else
   swal("No item to be removed");
}
function print_total() {
   
   if (item_dollar > 0){
      swal("Thank you for your shopping", "Total =" + item_dollar + "$");
      document.getElementById("comment").innerHTML = "<div> Thank you for your order. The order will be sent to you within approximately one week... please fill the <span><a href='shopform.html'>Form</a></span> <span><i class='fa-regular fa-face-smile'></i></span></div>";
   }
   else
   swal("Can not go to Shopping basket", "Total =" + item_dollar + "$");

      
}

