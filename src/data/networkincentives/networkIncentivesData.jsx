export const items = [
  {
    title: "What is Activity Points and PXL Points?",
    content: (
      <>
        <p className="mb-2 text-sm text-gray-600 sm:text-base">
          Activity Points represent the overall activity of a user, which
          includes actions such as posting content, commenting on posts,
          messaging, and reacting to content. PXL Points, on the other hand,
          reflect the quality of a user’s activity. While Activity Points
          increase with every interaction within the app, PXL Points assess the
          quality of those interactions.
        </p>
        <p className="text-sm text-gray-600 sm:text-base">
          For example, when a user posts content, their Activity Points will
          increase. However, if other users flag that content as offensive or
          inappropriate, the Activity Points will still rise, but the user’s PXL
          Points will decrease due to the low quality of the content.
        </p>
      </>
    ),
  },

  {
    title: "What is Incentives Distrubution?",
    content: (
      <>
        <p className="mb-2 text-sm text-gray-600 sm:text-base">
          PXL Points serve as the primary determinant of the incentives
          available to users within the Pixelmine system. The calculation of a
          user’s PXL Points is achieved by dividing the total number of PXL
          Points they possess by the overall number of users participating in
          the system.
        </p>
        <p className="mb-2 text-sm text-gray-600 sm:text-base">
          This methodology effectively promotes the creation of high-quality and
          informative content, thereby benefiting the entire network of users.
        </p>
      </>
    ),
  },
];
