import { StaggerContainer, StaggerItem } from "../animations/AnimatedWrappers";

const avatars = [
  {
    src: "user1.jpg",
    alt: "User 1 image",
  },
  {
    src: "user2.jpg",
    alt: "User 2 image",
  },
  {
    src: "user3.jpg",
    alt: "User 3 image",
  },
  {
    src: "user4.jpg",
    alt: "User 4 image",
  },
];

function StackedAvatars() {
  return (
    <StaggerContainer className="flex -space-x-3">
      {avatars.map((avatar) => (
        <StaggerItem>
          <img
            className="w-10 h-10 border-2 border-white rounded-full"
            src={`/avatars/${avatar.src}`}
            alt={avatar.alt}
            key={avatar.alt}
          />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

export default StackedAvatars;
