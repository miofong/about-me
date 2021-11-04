
let photoNumber = 6;
$(function () {
    $('#portfolio a').on('click', function () {
        if (photoNumber < 8) {
            $('#imageWrapper').append(`<img src="/asset/image/image${photoNumber}.jpg" alt="image${photoNumber}" id="photo${photoNumber}">`);
            $('#imageWrapper').append(`<img src="/asset/image/image${photoNumber + 1}.jpg" alt="image${photoNumber + 1}" id="photo${photoNumber + 1}">`);
            $('#imageWrapper').append(`<img src="/asset/image/image${photoNumber + 2}.jpg" alt="image${photoNumber + 2}" id="photo${photoNumber + 2}">`);
            $('#imageWrapper').append(`<img src="/asset/image/image${photoNumber + 3}.jpg" alt="image${photoNumber + 3}" id="photo${photoNumber + 3}">`);
            $('#imageWrapper').append(`<img src="/asset/image/image${photoNumber + 4}.jpg" alt="image${photoNumber + 4}" id="photo${photoNumber + 4}">`);
            photoNumber = photoNumber + 5;
        } else {
            alert('Opps! there are no more pictures!');
        }
    });
});