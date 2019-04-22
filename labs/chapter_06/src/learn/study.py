# learn.study

class Study(dict) :
    chapterName   = ''
    chapterNumber = 0
    section       = ''
    notes         = ''
    def getName(self) :
        return self['chapterName']
