class CategoriesSuggested {
    constructor({keyword, score, categories, filters}) {
        this.keyword= keyword
        this.score= score
        this.categories= this._toCategories(categories)
        this.filters= this._toFilters(filters)
    }

    _toCategories(categories) {
        return categories.map( item => new Category(item))
    }

    _toFilters(filters) {
        return new Filters(filters)
    }

    joinCategory(){
        return this.categories.map(item => item.slug).join('->')
    }

    joinCategoryFilters(){
        return `${this.filters.category.slug}->${this.filters.keywords.slug}`
    }

    joinFilters(){
        return `https://milanuncios.com/${this.filters.category.slug}/${this.filters.keywords.slug}.htm?fromSearch=1&fromSuggester=1&suggestionUsed=1`
    }
}

class Category {
    constructor(category) {
       this.id = category.id
       this.name = category.name
       this.slug = category.slug
    }
}

class Filters {
    constructor(filters) {
        this.category = new Category(filters.category)
        this.keywords = new Keywords(filters.keywords)
    }
}

class Keywords {
    constructor(keywords) {
        this.value = keywords.value
        this.legacySearch = keywords.legacySearch
        this.slug = keywords.slug
    }
}

export {
    CategoriesSuggested, Category, Filters, Keywords
}

