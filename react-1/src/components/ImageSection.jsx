import spaceImage from "../assets/bg-1.jpg"
function ImageSection(){
    return(
        <div className = "w-1/2 p-5">
          <img src={spaceImage} className="w-full h-full object-cover rounded-sm" />
        </div>
    );
}
export default ImageSection;