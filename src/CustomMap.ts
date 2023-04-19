
// Instructiomns to every class on how to they can be an argument to 'addMarker'
interface Mappable {
    name:string,
location: {
    lat: number,
    lng: number,
}
}

export class CustomMap {
   private googleMap: google.maps.Map;

    constructor(divId:string){
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement,{
            zoom: 1,
            center: {
                lat:0,
                lng:0
            },
        })
    }
addMarker(mappable: Mappable):void{
    new google.maps.Marker({
        map: this.googleMap,
        label: mappable.name,
        position: {
            lat: mappable.location.lat,
            lng: mappable.location.lng,
        }
    })
    
}
}