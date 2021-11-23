console.log('v1 code executing');

$(document).ready(function () {
    function makeModal(text) {
        return `<div id="myModal" class="modal fade" role="dialog" style="display: none">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
<!--      <div class="modal-header">-->
<!--        <button type="button" class="close" data-dismiss="modal">&times;</button>-->
<!--        <h4 class="modal-title">Modal Header</h4>-->
<!--      </div>-->
      <div class="modal-body" style="align-items: center; text-align: center; display: flex; margin: auto;">
        <p>${text}</p>
      </div>
    </div>

  </div>
</div>`;
    }

    $(".product-image").click(function (event) {
        event.preventDefault();
        var url = $($(this).find("a")[1]).attr("href");
        console.log("url ========   ")
        console.log(url)
        // return;
        $.get( url, function( data ) {
            var elements = $(data);
            var html_res = $(".jas-row.mb__50", elements).html();
            var m1 = $(makeModal(html_res));
            console.log(m1);
            document.body.insertAdjacentHTML('beforeend', m1);
            m1.modal('show');
        });
    });
});
