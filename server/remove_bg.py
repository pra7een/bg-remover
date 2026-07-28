from rembg import remove
import sys

input_path = sys.argv[1]
output_path = sys.argv[2]

with open(input_path, "rb") as inp:
    input_data = inp.read()

output_data = remove(input_data)

with open(output_path, "wb") as out:
    out.write(output_data)

print("Done")