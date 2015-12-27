/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



if (Meteor.isClient) {
  // This code only runs on the client

  Template.news.helpers({
    showNews: function(){
      return getNews();
    }
  });

  Meteor.subscribe("news");

}

function getNews() {
  var news = News.find().fetch();
  var formattedNews = _.map(news, newsFormatter);
  var sortedNews = _.sortBy(formattedNews, newsItemSorter);

  return sortedNews;
}

function newsFormatter(newsItem){

  var formattedNewsItem = {
    _id: newsItem._id,
    position: newsItem.position,
    title: newsItem.title,
    description: newsItem.description,
    image: newsItem.image
  };
  // console.log(formattedNewsItem);

  return formattedNewsItem;
}

function newsItemSorter (newsItem) {
  return newsItem.position;
}

Template.news.helpers({
  'news': function(){
    return News.find({});
  }
});