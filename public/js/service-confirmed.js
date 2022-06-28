const servicesList = document.querySelector('#list-services');
const serviceOptions = document.querySelector('#service-options');



const createServiceItem = (service) => {
    let serviceItem = $('<li>').addClass('list-list-group-item d-flex justify-content-between lh-sm-item');
    let serviceDiv = $('<div>');
    let serviceName = $('<h6>').addClass('mb-0').text(service.name);
    let serviceDesc = $('<small>').addClass('text-muted').text(service.description);
    let servicePrice = $('<span>').addClass('text-muted').text(`$${service.price}`);
    serviceDiv.append(serviceName, serviceDesc, servicePrice);
    serviceItem.append(serviceDiv);
    return serviceItem;
};

$(document).on('click', '.service', function(e) {
    if(e.target.checked) {
        
        console.log($(this).parent().find('span').attr('id'));
    } else{
        console.log('unchecked');
    }
    
});