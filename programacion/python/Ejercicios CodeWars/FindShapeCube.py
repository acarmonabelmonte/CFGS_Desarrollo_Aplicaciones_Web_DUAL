#To find the volume (centimeters cubed) of a cuboid you use the formula:
#volume = Length * Width * Height
#But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
#It's up to you to find out whether the cuboid has equal sides (= is a cube).
#Return true if the cuboid could have equal sides, return false otherwise.
#Return false for invalid numbers too (e.g volume or side is less than or equal to 0).
#Note: the sides must be integers

def cube_checker(volume, side):
    if volume<=0 or side <=0:
        return False
    else:
        if side*side*side == volume:
            return True
        else:
            return False

#Casos Test:
assert(cube_checker(-12,2) == False)
assert(cube_checker(8, 3) == False)
assert(cube_checker(8, 2) == True)
assert(cube_checker(-8,-2) == False)
assert(cube_checker(0, 0) == False)
assert(cube_checker(27, 3) == True)
assert(cube_checker(1, 5) == False)
assert(cube_checker(125, 5) == True)
assert(cube_checker(125,-5) == False)
assert(cube_checker(0, 12) == False)
assert(cube_checker(12, -1) == False)
assert(cube_checker(1, 1) == True)