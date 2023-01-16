from typing import List

def twoSum(nums: List[int], target: int) -> List[int]:
    # Compute all combinations of nums and record correct indices
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
              return [i, j]

if __name__ == "__main__":
  twoSum(nums=[2,5,5,11], target=10)