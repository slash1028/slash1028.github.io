import csv
import re

out = open('./douban_top250.csv', 'w', encoding='utf-8', newline='')
csv_writer = csv.writer(out,  dialect='excel')
f = open("./douban_top250.txt", "r", encoding='utf-8')

headList = ['rank', 'name', 'mark', 'author', 'publisher', 'year', 'price']
csv_writer.writerow(headList)

for line in f.readlines():
    line = line.strip('{}\n')
    textList = line.split(',')
    for text in textList:
        newText = (text.split(':')[1]).strip("' ")
        textList[textList.index(text)] = newText
    textList.remove('https')
    textList.remove('https')
    textList[0] = int(textList[0]) + 1
    textList[6] = textList[6].strip('元')
    textList[3] = re.sub(r'\[[\u4e00-\u9fa5]{0,}]|\uff08[\u4e00-\u9fa5]{0,}\uff09|\(.{0,}\)|/.{0,}$', "", textList[3])
    textList[5] = re.sub(r'-\d{0,}|\.\d{0,}|[\u4e00-\u9fa5]{1}\d{0,2}', "", textList[5])
    textList[3] = re.sub(r'^$', "无名", textList[3])
    print(textList[3])

    csv_writer.writerow(textList)

f.close()
out.close()
