import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function RoomSkeleton() {
  return (
    <>
      <Box>
        <Skeleton rounded="2xl" height={280} mb={3} />
        <SkeletonText mt="4" noOfLines={3} spacing="3" />
      </Box>
      <Box>
        <Skeleton rounded="2xl" height={280} mb={3} />
        <SkeletonText mt="4" noOfLines={3} spacing="3" />
      </Box>
      <Box>
        <Skeleton rounded="2xl" height={280} mb={3} />
        <SkeletonText mt="4" noOfLines={3} spacing="3" />
      </Box>
      <Box>
        <Skeleton rounded="2xl" height={280} mb={3} />
        <SkeletonText mt="4" noOfLines={3} spacing="3" />
      </Box>
      <Box>
        <Skeleton rounded="2xl" height={280} mb={3} />
        <SkeletonText mt="4" noOfLines={3} spacing="3" />
      </Box>
      <Box>
        <Skeleton rounded="2xl" height={280} mb={3} />
        <SkeletonText mt="4" noOfLines={3} spacing="3" />
      </Box>
    </>
  );
}
