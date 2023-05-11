import sys

# 获取命令行参数
args = sys.argv

# 输出脚本文件名
print("scriptName", args[0])

# 输出命令行传递的参数
for arg in args[1:]:
    print("parma:", arg)
