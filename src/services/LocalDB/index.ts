export default class Table {
    all: any[]
    constructor (public name: string) {
      this.all = []
      const local = window.localStorage.getItem(name)
      if (local) {
        this.all = JSON.parse(local)
      } else {
        window.localStorage.setItem(name, '[]')
      }
    }

    store () {
      window.localStorage.setItem(this.name, JSON.stringify(this.all))
    }

    get (key: string, val: string | number): any[] {
      return this.all.filter((v: any) => {
        return v[key] && v[key] === val
      })
    }

    getAll (): any[] {
      return this.all
    }

    add (val: any): Table {
      this.all.push(val)
      window.localStorage.setItem(this.name, JSON.stringify(this.all))
      return this
    }

    delete (key: string, val: number | string): boolean {
      const all = this.all
      for (let i = 0; i < all.length; i++) {
        if (all[i][key] && all[i][key] === val) {
          all.splice(i, 1)
          i--
        }
      }
      this.store()
      return false
    }

    put (filterKey: string, filterVal: number|string, key: string, val: any): Table {
      const all = this.all
      for (let i = 0; i < all.length; i++) {
        if (all[i][filterKey] === filterVal) {
          all[i][key] = val
        }
      }
      this.store()
      return this
    }
}
