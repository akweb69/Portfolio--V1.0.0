import { VideoText } from "@/components/ui/video-text";

const NameText = () => {
  return (
    <div>
      <div className="relative h-[200px] w-2/3 mx-auto overflow-hidden text-white">
        <VideoText src="https://cdn.pixabay.com/video/2024/05/25/213616_large.mp4">
          Abu Kalam
        </VideoText>
      </div>
    </div>
  );
};

export default NameText;
