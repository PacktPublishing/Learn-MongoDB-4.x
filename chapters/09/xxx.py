busi_name = 'A'
part_info = 'xxx [Acco]'
start = part_info.find('[') + 1
stop  = part_info.find(']')
if start > 0  and stop > 0:
    busi_name = part_info[start:start + (stop - start)]
print(busi_name)
print(start)
print(stop)
