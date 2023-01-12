coins = [100, 50, 25, 10, 5, 1]

resp = {}
def init_resp():
  for i in coins:
    resp[i] = 0

def find_min(change):
  init_resp()
  for value in coins:
    while change >= value:
      resp[value] += 1
      change -= value
  return resp

# if __name__ == '__main__':
#   print(find_min(93))